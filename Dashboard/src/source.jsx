import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";
import { FaSitemap } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscSourceControl } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import {profile2,profile3,profile4,profile5,
        profile6,profile7,profile8,amla,
        Beetroot,
        Tomato,
        spinach,
        potato,
        lemon,
        ginger
} from './assets/images'
import { Route, Routes } from 'react-router-dom'
export  const sidebar = [
    {
        name:"Dashboard",
        route:"/",
        icon:<MdSpaceDashboard/>,
    },
    {
        name:"Wholesalers",
        route:"",
        icon:<FiUsers/>,
    },
    {
        name:"Chats",
        route:"",
        icon:<BsChatSquareDots/>,
        notificationCount:3,
    },
    // {
    //     name:"Products",
    //     route:"",
    //     icon:<FaSitemap/>,
    // },
    {
        name:"Orders",
        route: "",
        icon:<HiOutlineShoppingBag/>,
    },
    // {
    //     name:"Sources",
    //     route:"",
    //     icon:<VscSourceControl/>,
    // },
    {
        name:"Settings",
        route:"",
        icon:<IoSettingsOutline/>,
    },
    
]

export const userMenus = [
    {name:"Profile", route:"#"},
    {name:"Settings", route:"#"},
    {name:"Logout", route:"#"},
]
export const farmers = [
    {
        customerName:"Krishna Roy",
        customerProfile:profile2,
        customerAddress: "Alur",
        productName: "All-purpose flour",
        purchaseDate: new Date("January 10, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "2667 kg",
    },
    {
        customerName:"Shyam Sundar",
        customerProfile:profile3,
        customerAddress: "Para",
        productName: "Baking powder",
        purchaseDate: new Date("December 15, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "100 kg",
    },
    {
        customerName:"Kishore",
        customerProfile:profile4,
        customerAddress: "Tulsi Nagar",
        productName: "Granulated sugar",
        purchaseDate: new Date("October 20, 2024"),
        status:2,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "60 kg",
    },
    {
        customerName:"Sam Baisla",
        customerProfile:profile5,
        customerAddress: "Narottam Nagar South",
        productName: "Salt",
        purchaseDate: new Date("November 1, 2024"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "20 kg",
    },
    {
        customerName:"Kishori Kumari",
        customerProfile:profile6,
        customerAddress: "Narottam Nagar South",
        productName: "Unsalted butter",
        purchaseDate: new Date("January 2, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "667 kg",
    },
    {
        customerName:"Ravi Das",
        customerProfile:profile7,
        customerAddress: "Sant Nagar East",
        productName: "Milk",
        purchaseDate: new Date("November 11, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "1000 kg",
    },
    {
        customerName:"Prem Singh",
        customerProfile:profile8,
        customerAddress: "Bahadurpur",
        productName: "Cumin",
        purchaseDate: new Date("August 16, 2024"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "67 kg",
    },
]

export const trendingProducts = [
    {
      name:"Chocolate Cream",
      image:amla,
      price:"₹ 20",
      discount:"30%",
    },
    {
      name:"Multigrain Biscuits",
      image:Beetroot,
      price:"₹20",
      discount:"20%",
    },
    {
      name:"Dry Fruit Biscuits",
      image:Tomato,
      price:"₹ 24",
      discount:"18%",
    },
    {
      name:"Vanilla Cream",
      image:spinach,
      price:"₹ 15",
      discount:"16%",
    },
    {
      name:"Fruit Flavours",
      image:potato,
      price:"₹ 18",
      discount:"14%",
    },
    {
      name:"jeera Biscuit",
      image:lemon,
      price:"₹ 15",
      discount:"12%",
    },
    {
      name:"Coconut Biscuit",
      image:ginger,
      price:"₹ 12",
      discount:"10%",
    },
  ]