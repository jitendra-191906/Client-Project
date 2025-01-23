import {
    MARBELS,
    GRANITES,
    TILES
} from '../constants'
import {
    marble,
    granite,
    tile_bathroom,
    tile_floor,
    tile_indoor,
    tile_kitchen,
    tile_outdoor
} from '../constants.js';

// Home Images
import image1 from '../Images/Marble/white_marble.png'
import image2 from '../Images/Marble/green_marble.jpeg'
import image3 from '../Images/Marble/red_marble.png'
import image4 from '../Images/Marble/black_marble.png'
import graniteImg1 from '../Images/Granite/absulate_black.jpeg';
import graniteImg2 from '../Images/Granite/granite_type_2.png';
import graniteImg3 from '../Images/Granite/granite_type_3.png';
import graniteImg4 from '../Images/Granite/granite_type_4.png';
import kitchen1 from '../Images/Kitchen/checkerboard_tiles.jpeg';
import kitchen2 from '../Images/Kitchen/Patterned_Tiles.jpeg';
import kitchen3 from '../Images/Kitchen/Hexagon_Tiles.jpg';
import kitchen4 from '../Images/Kitchen/Terrazzo_Tiles.jpeg';
import bathroom1 from '../Images/Bathroom/Pickett_Tiles.jpeg';
import bathroom2 from '../Images/Bathroom/Raku_Tiles.jpg';
import bathroom3 from '../Images/Bathroom/Troverta_Tiles.jpg';
import bathroom4 from '../Images/Bathroom/Scultura_Tiles.jpg';
import indoor1 from '../Images/Indoor/Ceramic_tiles.png';
import indoor2 from '../Images/Indoor/glass_tile.jpeg';
import indoor3 from '../Images/Indoor/Cement_tiles.png';
import indoor4 from '../Images/Indoor/mosaic_tile.jpeg';
import outdoor1 from '../Images/Outdoor/Paving_Tiles.jpeg';
import outdoor2 from '../Images/Outdoor/Concrete_Tiles.png';
import outdoor3 from '../Images/Outdoor/Wooden_Tiles.jpeg';
import outdoor4 from '../Images/Outdoor/natural_tile.jpeg';
import floor1 from '../Images/Floor/Mist_Tiles.jpeg';
import floor2 from '../Images/Floor/Bardiglio_Hexagonal_Tiles.jpeg';
import floor3 from '../Images/Floor/Classic_Oak.jpeg';
import floor4 from '../Images/Floor/Scintilla_Tiles.jpeg';



//  

// Products-Images
import marbleImg1 from "../Images/Marble/white_marble.jpeg";
import marbleImg2 from "../Images/Marble/travertine_marble.jpeg";
import marbleImg3 from "../Images/Marble/onyx_marble.jpeg";
import marbleImg4 from "../Images/Marble/statuario_marble.jpeg";
import marbleImg5 from "../Images/Marble/Italian_marble.jpeg";
import marbleImg6 from "../Images/Marble/black_marquina_marble.jpeg";
import marbleImg7 from "../Images/Marble/Grey_William_Italian_Marble.jpeg";
import marbleImg8 from "../Images/Marble/Emperador_Marble.jpeg";

import marbleImage1 from "../Images/Marble_design/marble_flooring_1.jpg";
import marbleImage2 from "../Images/Marble_design/marble_flooring_2.jpeg";
import marbleImage3 from "../Images/Marble_design/marble_flooring_3.jpeg";
import marbleImage4 from "../Images/Marble_design/marble_flooring_4.jpg";

import graniteImg5 from '../Images/Granite/Kashmir_White_Granite.jpeg';
import graniteImg6 from '../Images/Granite/Moon_White_Granite .jpeg';
import graniteImg7 from '../Images/Granite/Blue_Pearl_Granite.jpeg';
import graniteImg8 from '../Images/Granite/Imperial_Red_Granite.jpeg';
import graniteImg9 from '../Images/Granite/Forest_Green_Granite.jpeg';
import graniteImg10 from '../Images/Granite/Himalayan_Blue_Granite.jpeg';

import graniteImage1 from '../Images/Granite_design/GraniteFlooring.jpeg';
import graniteImage2 from '../Images/Granite_design/Granite_img.png';
import graniteImage3 from '../Images/Granite_design/decorative_granite.jpg';

import kitchen5 from '../Images/Kitchen/Mosaic_Tile.png';
import kitchen6 from '../Images/Kitchen/Moroccan_Tiles.jpeg';
import kitchen7 from '../Images/Kitchen/Asymmetrical_Tiles.jpeg';
import kitchen8 from '../Images/Kitchen/Floral_Patterned_Tiles.jpeg';
import kitchen9 from '../Images/Kitchen/Geometric_Tiles.jpeg';
import kitchen10 from '../Images/Kitchen/Chequered_Tiles.jpeg';

import kitchenImage1 from '../Images/Kitchen_design/kitchen_flooring_1.jpg';
import kitchenImage2 from '../Images/Kitchen_design/kitchen_flooring_2.jpg';
import kitchenImage3 from '../Images/Kitchen_design/kitchen_flooring_3.jpg';

import bathroomImage1 from '../Images/Bathroom_design/bathroom_flooring_1.jpg';
import bathroomImage2 from '../Images/Bathroom_design/bathroom_flooring_2.jpeg';
import bathroomImage3 from '../Images/Bathroom_design/bathroom_flooring_3.jpg';
import bathroom5 from '../Images/Bathroom/Chevron_Pattern_Tiles.jpeg';
import bathroom6 from '../Images/Bathroom/Fish_Scale_Tiles.jpeg';
import bathroom7 from '../Images/Bathroom/Linear_Strip_Tiles.jpg';
import bathroom8 from '../Images/Bathroom/Frosted_Glass_Tiles.jpg';
import bathroom9 from '../Images/Bathroom/Watercolor_Effect_Tiles.jpg';
import bathroom10 from '../Images/Bathroom/Split_Face_Stone_Tiles.jpg';


import floorImage1 from '../Images/Floor_design/floor_tiles_1.jpg';
import floorImage2 from '../Images/Floor_design/floor_tiles_2.jpg';
import floorImage3 from '../Images/Floor_design/floor_tiles_3.jpg';
import floor5 from '../Images/Floor/Metal_Tile.jpeg';
import floor6 from '../Images/Floor/Pebble _Tiles.jpeg';
import floor7 from '../Images/Floor/Saltillo_Tiles.jpeg';
import floor8 from '../Images/Floor/Bamboo_Tiles.jpeg';
import floor9 from '../Images/Floor/Carpet_Tiles.jpeg';
import floor10 from '../Images/Floor/3D_Tiles.jpeg';


import indoor5 from '../Images/Indoor/Leather_Tiles.jpeg';
import indoor6 from '../Images/Indoor/Gradient_Glass_Tiles.jpeg';
import indoor7 from '../Images/Indoor/Tactile_Tiles.jpeg';
import indoor8 from '../Images/Indoor/Textured_Wall_Tiles.jpeg';
import indoor9 from '../Images/Indoor/Rustic_Tiles.jpg';
import indoor10 from '../Images/Indoor/Waterjet_Cut_Tiles.jpg';


import outdoor5 from '../Images/Outdoor/Sandstone_Tiles.jpg';
import outdoor6 from '../Images/Outdoor/Limestone_Tiles.png';
import outdoor7 from '../Images/Outdoor/Grass_Look_Tiles.jpg';
import outdoor8 from '../Images/Outdoor/River_Rock_Tiles.jpg';
import outdoor9 from '../Images/Outdoor/3D_0utdoor_Tiles.jpg';
import outdoor10 from '../Images/Outdoor/Concrete_Tiles.png';


// Home Products 
export const homeProductsList = [
    {
        title: "Explore our Marble Stone",
        data: [
            {
                image: image1,
                name: "White Marble"
            },
            {
                image: image2,
                name: "Green Marble"
            },
            {
                image: image3,
                name: "Black Marble"
            },
            {
                image: image4,
                name: "Red Marble"
            },
        ],
        path: marble,
        id: MARBELS,
    },

    {
        title: "Explore our Granite Collection",
        data: [
            {
                image: graniteImg1,
                name: "Absolute Black Granite"
            },
            {
                image: graniteImg2,
                name: "Majestic Lappato Granite"
            },
            {
                image: graniteImg3,
                name: "Red Pearl Granite"
            },
            {
                image: graniteImg4,
                name: "Rajasthan Black Granite"
            },
        ],
        path: granite,
        id: GRANITES,
    },

    {
        title: "Explore our Kitchen Tiles Collection",
        data: [
            {
                image: kitchen1,
                name: "Checkerboard Tile"
            },
            {
                image: kitchen2,
                name: "Patterned Tile"
            },
            {
                image: kitchen3,
                name: "Hexagon Tile"
            },
            {
                image: kitchen4,
                name: "Terrazzo Tile"
            },
        ],
        path: tile_kitchen,
        id: TILES,
    },
    {
        title: "Explore our Bathroom Tiles Collection",
        data: [
            {
                image: bathroom1,
                name: "Pickett Tile"
            },
            {
                image: bathroom2,
                name: "Raku Tile"
            },
            {
                image: bathroom3,
                name: "Troverta Tile"
            },
            {
                image: bathroom4,
                name: "Scultura Tile"
            },
        ],
        path: tile_bathroom,
        id: TILES,
    },
    {
        title: "Explore our Indoor Tiles Collection",
        data: [
            {
                image: indoor1,
                name: "Ceramic Tiles"
            },
            {
                image: indoor2,
                name: "Glass Tiles"
            },
            {
                image: indoor3,
                name: "Cement Tiles"
            },
            {
                image: indoor4,
                name: "Mosaic Tile"
            },
        ],
        path: tile_indoor,
        id: TILES,
    },
    {
        title: "Explore our Outdoor Tiles Collection",
        data: [
            {
                image: outdoor1,
                name: "Paving Tile"
            },
            {
                image: outdoor2,
                name: "Concrete Tile"
            },
            {
                image: outdoor3,
                name: "Wooden Tile"
            },
            {
                image: outdoor4,
                name: "Natural Stone Tiles"
            },
        ],
        path: tile_outdoor,
        id: TILES,
    },
    {
        title: "Explore our Floor Tiles Collection",
        data: [
            {
                image: floor1,
                name: "Mist Tile"
            },
            {
                image: floor2,
                name: "Bardiglio Hexagonal Tiles"
            },
            {
                image: floor3,
                name: "Classic Oak"
            },
            {
                image: floor4,
                name: "Scintilla Tiles"
            },
              
        ],
        path: tile_floor,
        id: TILES,
    },
];


// Slides Data
export const marbleSlides = [
    // {
    //     image: marbleImage1,
    // },
    // {
    //     image: marbleImage2,
    // },
    // {
    //     image: marbleImage3,
    // },
    // {
    //     image: marbleImage4,
    // },
    // {
    //     image: marbleImage2,
    // },
];
export const graniteSlides = [
    // {
    //     image: graniteImage1,
    // },
    // {
    //     image: graniteImage2,
    // },
    // {
    //     image: graniteImage3,
    // },

];
export const kitchenTileSlides = [
    // {
    //     image: kitchenImage1
    // },
    // {
    //     image: kitchenImage2
    // },
    // {
    //     image: kitchenImage3
    // },

];
export const floorTileSlides = [
    // {
    //     image: floorImage1

    // },
    // {
    //     image: floorImage2

    // },
    // {
    //     image: floorImage3

    // },
];
export const bathroomTileSlides = [
    // {
    //     image: bathroomImage1

    // },
    // {
    //     image: bathroomImage2

    // },
    // {
    //     image: bathroomImage3

    // },

];
export const indoorTileSlides = [];
export const outdoorTileSlides = [];


// Heading Text Data
export const marbleHeadingText = "Explore Marbel Products";
export const graniteHeadingText = "Explore Granite Products";
export const kitchenTileHeadingText = "Explore Kitchen Tiles Products";
export const floorTileHeadingText = "Explore Floor Tiles Products";
export const bathroomTileHeadingText = "Explore Bathroom Tiles Products";
export const indoorTileHeadingText = "Explore Indoor Tiles Products";
export const outdoorTileHeadingText = "Explore Outdoor Tiles Products";

// Products Data
export const marbleProductsList = [
    {
        image: marbleImg1,
        name: "White Marble"
    },
    {
        image: marbleImg2,
        name: "Travertine Marble"
    },
    {
        image: marbleImg3,
        name: "Onyx Marble"
    },
    {
        image: marbleImg4,
        name: "Statuario Marble"
    },
    {
        image: marbleImg5,
        name: "Italian Marble"
    },
    {
        image: image3,
        name: "Black Marble"
    },
    {
        image: marbleImg7,
        name: " Grey William Italian Marble"
    },
    {
        image: marbleImg8,
        name: "Emperador Marble"
    },
    {
        image: image2,
        name: "Green Marble"
    },
    {
        image: image4,
        name: "Red Marble"
    },
];

export const graniteProductsList = [
    {
        image: graniteImg1,
        name: "Absolute Black Granite"
    },
    {
        image: graniteImg2,
        name: "Majestic Lappato Granite"
    },
    {
        image: graniteImg3,
        name: "Red Pearl Granite"
    },
    {
        image: graniteImg4,
        name: "Rajasthan Black Granite"
    },
    {
        image: graniteImg5,
        name: "Kashmir White Granite"
    },
    {
        image: graniteImg6,
        name: "Moon White Granite"
    },
    {
        image: graniteImg7,
        name: "Blue Pearl Granite"
    },
    {
        image: graniteImg8,
        name: "Imperial Red Granite"
    },
    {
        image: graniteImg9,
        name: "Forest Green Granite"
    },
    {
        image: graniteImg10,
        name: "Himalayan Blue Granite"
    },

];
export const kitchenTileProductsList = [
    {
        image: kitchen1,
        name: "Checkerboard Tile"
    },
    {
        image: kitchen2,
        name: "Patterned Tile"
    },
    {
        image: kitchen3,
        name: "Hexagon Tile"
    },
    {
        image: kitchen4,
        name: "Terrazzo Tile"
    },
    {
        image: kitchen5,
        name: "Mosaic Tile"
    },
    {
        image: kitchen6,
        name: "Moroccan Tile"
    },
    {
        image: kitchen7,
        name: "Asymmetrical Tile"
    },
    {
        image: kitchen8,
        name: "Floral Patterned Tile"
    },
    {
        image: kitchen9,
        name: "Geometric Tile"
    },
    {
        image: kitchen10,
        name: "Chequered Tile"
    },

];
export const floorTileProductsList = [
    {
        image: floor1,
        name: "  Mist Tile"
    },
    {
        image: floor2,
        name: "Bardiglio Hexagonal Tile"
    },
    {
        image: floor3,
        name: "Classic Oak Tile"
    },
    {
        image: floor4,
        name: "Scintilla Tile"
    },
    {
        image: floor5,
        name: "Metal Tiles"
    },
    {
        image: floor6,
        name: "Pebble Tiles"
    },
    {
        image: floor7,
        name: "Saltillo Tiles"
    },
    {
        image: floor8,
        name: "Bamboo Tiles"
    },
    {
        image: floor9,
        name: "Carpet Tiles"
    },
    {
        image: floor10,
        name: "3D Tiles"
    },
];
export const bathroomTileProductsList = [
    {
        image: bathroom1,
        name: " Pickett Tile"
    },
    {
        image: bathroom2,
        name: "Raku Tile"
    },
    {
        image: bathroom3,
        name: "Troverta Tile"
    },
    {
        image: bathroom4,
        name: "Scultura Tile"
    },
    {
        image: bathroom5,
        name: "Chevron Pattern Tile"
    },
    {
        image: bathroom6,
        name: "Fish Scale Tile"
    },
    {
        image: bathroom7,
        name: "Linear Strip Tile"
    },
    {
        image: bathroom8,
        name: "Frosted Glass Tile"
    },
    {
        image: bathroom9,
        name: "Watercolor Effect Tile"
    },
    {
        image: bathroom10,
        name: "Split Face Stone Tiles"
    },
    

];
export const indoorTileProductsList = [
    {
        image: indoor1,
        name: "Ceramic Tile"
    },
    {
        image: indoor2,
        name: "Glass Tile"
    },
    {
        image: indoor3,
        name: "Cement Tile"
    },
    {
        image: indoor4,
        name: "Mosaic Tile"
    },
    {
        image: indoor5,
        name: "Leather Tile"
    },
    {
        image: indoor6,
        name: "Gradient Glass Tile"
    },
    {
        image: indoor7,
        name: "Tactile Tile"
    },
    {
        image: indoor8,
        name: "Textured Wall Tile"
    },
    {
        image: indoor9,
        name: "Rustic Tile"
    },
    {
        image: indoor10,
        name: "Waterjet Cut Tile"
    },

];
export const outdoorTileProductsList = [
    {
        image: outdoor1,
        name: "Paving Tile"
    },
    {
        image: outdoor2,
        name: "Concrete Tile"
    },
    {
        image: outdoor3,
        name: "Wooden Tile"
    },
    {
        image: outdoor4,
        name: "Natural Stone Tile"
    },
    {
        image: outdoor5,
        name: "Sandstone Tile"
    },
    {
        image: outdoor6,
        name: "Limestone Tile"
    },
    {
        image: outdoor7,
        name: "Grass Look Tile"
    },
    {
        image: outdoor8,
        name: "River Rock Tile"
    },
    {
        image: outdoor9,
        name: "3D Outdoor Tile"
    },
    {
        image: outdoor10,
        name: "Concrete Tile"
    },
  
];