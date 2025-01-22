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
import indoor2 from '../Images/Indoor/Glass_tiles.png';
import indoor3 from '../Images/Indoor/Cement_tiles.png';
import indoor4 from '../Images/Indoor/mosaic_tile.jpeg';
import outdoor1 from '../Images/Outdoor/Paving_Tiles.jpeg';
import outdoor2 from '../Images/Outdoor/Concrete_Tiles.png';
import outdoor3 from '../Images/Outdoor/Wooden_Tiles.jpeg';
import outdoor4 from '../Images/Outdoor/Natural_Stone_Tiles.jpeg';
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

import img1 from '../Images/Indoor/Indoor_Tiles.png';
import img2 from '../Images/Outdoor/Outdoor_Tiles.png';
import img3 from '../Images/Kitchen_design/Kitchen_tiles.png';
import img4 from '../Images/Bathroom_design/Bathroom_Tiles.png';


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
    {
        image: marbleImage1,
    },
    {
        image: marbleImage3,
    },
    {
        image: marbleImage2,
    },
];
export const graniteSlides = [];
export const kitchenTileSlides = [];
export const floorTileSlides = [];
export const bathroomTileSlides = [];
export const indoorTileSlides = [];
export const outdoorTileSlides = [];


// Heading Text Data
export const marbleHeadingText = "Explore Marbel Products";
export const graniteHeadingText = [];
export const kitchenTileHeadingText = [];
export const floorTileHeadingText = [];
export const bathroomTileHeadingText = [];
export const indoorTileHeadingText = [];
export const outdoorTileHeadingText = [];

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
        image: marbleImg6,
        name: "Black Marquina Marble"
    },
    {
        image: marbleImg7,
        name: " Grey William Italian Marble"
    },
    {
        image: marbleImg8,
        name: "Emperador Marble"
    },
];

export const graniteProductsList = [];
export const kitchenTileProductsList = [];
export const floorTileProductsList = [];
export const bathroomTileProductsList = [];
export const indoorTileProductsList = [];
export const outdoorTileProductsList = [];