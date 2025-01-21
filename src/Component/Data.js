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
import img1 from '../Images/Indoor_Tiles.png';
import img2 from '../Images/Outdoor_Tiles.png';
import img3 from '../Images/Kitchen_tiles.png';
import img4 from '../Images/Bathroom_Tiles.png';
import graniteImg1 from '../Images/absulate_black.jpeg';
import graniteImg2 from '../Images/granite_type_2.png';
import graniteImg3 from '../Images/granite_type_3.png';
import graniteImg4 from '../Images/granite_type_4.png';

// Products-Images
import marbleImg1 from "../Images/white_marble.jpeg";
import marbleImg2 from "../Images/travertine_marble.jpeg";
import marbleImg3 from "../Images/onyx_marble.jpeg";
import marbleImg4 from "../Images/statuario_marble.jpeg";
import marbleImg5 from "../Images/Italian_marble.jpeg";
import marbleImg6 from "../Images/black_marquina_marble.jpeg";
import marbleImg7 from "../Images/Grey_William_Italian_Marble.jpeg";
import marbleImg8 from "../Images/Emperador_Marble.jpeg";
import marbleImage1 from "../Images/marble_flooring_1.jpg";
import marbleImage2 from "../Images/marble_flooring_2.jpeg";
import marbleImage3 from "../Images/marble_flooring_3.jpeg";


// Home Products 
export const homeProductsList = [
    {
        title: "Explore our Marble Stone",
        data: [
            { image: marbleImg1, name: "White Marble" },
            { image: marbleImg2, name: "Green Marble" },
            { image: marbleImg3, name: "Black Marble" },
            { image: marbleImg4, name: "Red Marble" },
        ],
        path: marble,
        id: MARBELS,
    },
    {
        title: "Explore our Granite Collection",
        data: [
            { image: graniteImg1, name: "Absolute Black Granite" },
            { image: graniteImg2, name: "Majestic Lappato Granite" },
            { image: graniteImg3, name: "Red Pearl Granite" },
            { image: graniteImg4, name: "Rajasthan Black Granite" },
        ],
        path: granite,
        id: GRANITES,
    },
    {
        title: "Explore our Kitchen Tiles Collection",
        data: [
            {
                image: img1, name: "Indoor Tiles"
            },
            { image: img2, name: "Outdoor Tiles" },
            { image: img3, name: "Kitchen Tiles" },
            { image: img4, name: "Bathroom Tiles" },
        ],
        path: tile_kitchen,
        id: TILES,
    },
    {
        title: "Explore our Bathroom Tiles Collection",
        data: [
            {
                image: img1, name: "Indoor Tiles"
            },
            { image: img2, name: "Outdoor Tiles" },
            { image: img3, name: "Kitchen Tiles" },
            { image: img4, name: "Bathroom Tiles" },
        ],
        path: tile_bathroom,
        id: TILES,
    },
    {
        title: "Explore our Indoor Tiles Collection",
        data: [
            {
                image: img1, name: "Indoor Tiles"
            },
            { image: img2, name: "Outdoor Tiles" },
            { image: img3, name: "Kitchen Tiles" },
            { image: img4, name: "Bathroom Tiles" },
        ],
        path: tile_indoor,
        id: TILES,
    },
    {
        title: "Explore our Outdoor Tiles Collection",
        data: [
            {
                image: img1, name: "Indoor Tiles"
            },
            { image: img2, name: "Outdoor Tiles" },
            { image: img3, name: "Kitchen Tiles" },
            { image: img4, name: "Bathroom Tiles" },
        ],
        path: tile_outdoor,
        id: TILES,
    },
    {
        title: "Explore our Floor Tiles Collection",
        data: [
            {
                image: img1, name: "Indoor Tiles"
            },
            { image: img2, name: "Outdoor Tiles" },
            { image: img3, name: "Kitchen Tiles" },
            { image: img4, name: "Bathroom Tiles" },
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