import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem, Slide } from "@mui/material";
import { navigation } from "../../../config/navigationMenu";
// import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
// import { getUser, logout } from "../../../Redux/Auth/Action";
import { getCart } from "../../../Redux/Customers/Cart/Action";
// import menuItemsData from "./data.json";
// import Menuitems from "../dropdown/Menuitems";
import "../dropdown/dropdown.css";
import { logoutCustomer } from "../../../action/Customer";
// import logo from "../../../logos/111.png";
import DropDown from "./DropDown";
import MenuOpen from "./MenuOpen";
// import OpenHamburger from "./OpenSunglasses";
// import OpenSunglasses from "./OpenSunglasses";
import CustomAccordion from "./CustomAccordian";
import ShoppingCart, { EmptyCart } from "./ShoppingCartModel";
import Collapse from '@mui/material/Collapse';




// export default CartButton;

// Utility function to join class names conditionally
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  // State to manage mobile menu open/close
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, cart, newUser, cartItems } = useSelector((store) => store);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

// Initialize menuItemsData as null or an empty object
const [menuItemsData, setmenuItemsData] = useState(null); // or useState({})
const [selectedPage, setSelectedPage] = useState(null);
const [openCart, setOpenCart] = useState(false);
// const [showDropdown, setShowDropdown] = useState(false);
// const [menuItemsData, setMenuItemsData] = useState(null);
const [collapseKey, setCollapseKey] = useState(0);


const handlePageClick = (pageName) => {
  setSelectedPage(pageName === selectedPage ? null : pageName);
};
// const menuItemsData =[];
  const Sunglasses = {
    sidebarData: {
      shop: ["Men", "Women", "Kids", "All Sunglasses"],
      giftCard: [
        "New Arrivals",
        "Best Sellers",
        "Reverse",
        "Scuderia Ferrari",
        "Chromance",
        "Polarized ❤️",
        "Titanium"
      ]
    },
    mainContentData: [ { name: "Aviator", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7235_8063_6.png" },
    { name: "Wayfarer", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_6750_6.png" },
    { name: "Erika", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_8368_6.png" },
    { name: "Round", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_5754_6.png" },
    { name: "New Wayfarer", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png" },
    { name: "I-shape", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png" },
    { name: "Justin", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png" },
    { name: "Clubmaster", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png" }]

  }

   
  
const Eyeglasses ={

  sidebarData: {
    shop: ["Men", "Women", "Kids", "All Eyeglasses"],
    giftCard: [
      "New Arrivals",
      "Best Sellers",
      "Scuderia Ferrari",
      
    ],
    frameStyle: ["Full Rim", "Half Rim"]

  },
  mainContentData: [  { name: "Aviator Optics", img:"https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png" },
  { name: "Hexagonal Optics", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png" },
  { name: "State Street Optics", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png" },
  { name: "Club Maste Optics", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png" },
  { name: "Timeless RX 5228",  img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png" },

]
}

// const toggleDropdown = (pageName, data) => {
//   if (pageName === "SUNGLASSES" ) {
//     setMenuItemsData(Sunglasses);
//     setShowDropdown(true);
//   } else if( pageName === "EYEGLASSES"){
//     setMenuItemsData(Eyeglasses);
//     setShowDropdown(true);

//   }else {
//     setMenuItemsData(null);
//     setShowDropdown(false);
//   }
//   setCollapseKey((prevKey) => prevKey + 1); // Update key to trigger remount
// };

  // Fetch user and cart data if JWT is present
  useEffect(() => {
    if (jwt) {
      dispatch(getCart(jwt));
    }
  }, [jwt]);

  // Event handlers for user menu
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  // Event handlers for authentication modal
  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  // Navigation handler for category clicks
  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  // Effect to close auth modal on new user registration and handle navigation restrictions
  useEffect(() => {
    if (newUser?.newUser?.user) {
      handleClose();
    }
    if (
      auth.user?.role !== "ADMIN" &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate(-1);
    }
  }, [auth.user]);

  // Logout handler
  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logoutCustomer());
  };
const handleOpenCart = () => {
  setOpenCart(true);
}
const handleCloseCart = () => {
  setOpenCart(false);
}
  // Navigate to user's orders
  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    navigate("/account/order");
  };

  return (
    <div className="bg-white pb-4 z-999">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative flex w-full max-w-md flex-col overflow-y-auto bg-white pb-12 shadow-xl" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile menu navigation */}
                <CustomAccordion sunglasses={Sunglasses} eyeGlasses={Eyeglasses}/>

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6 text-center ">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-black"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}
            {/* <div className="space-y-2">
      {navigation?.pages?.map((page) => (
        <div key={page.name} className="flow-root">
          {page.name === 'Sunglasses' || page.name === 'Eyeglasses' ? (
            <button
              onClick={() => handlePageClick(page.name)}
              className="m-2 block p-4 font-medium text-black"
            >
              {page.name} {selectedPage === page.name ? '-' : '+'}
            </button>
          ) : (
            <a
              href={page.href}
              className="-m-2 block p-2 font-medium text-black"
            >
              {page.name}
            </a>
          )}
          <Transition
            show={selectedPage === page.name && (page.name === 'Sunglasses' || page.name === 'Eyeglasses')}
            enter="transition duration-200 ease-out"
            enterFrom="transform -translate-y-4 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-4 opacity-0"
          >
            <div className="p-4 border">
              {page.name === 'Sunglasses' && <OpenSunglasses drawer={isOpen} setDrawer={setIsOpen} sunglasses={Sunglasses} eyeGlasses={Eyeglasses} pages={navigation.pages}/>}
            </div>
          </Transition>
        </div>
      ))}
    </div> */}
                {/* <OpenHumburger drawer={isOpen} setDrawer={setIsOpen}/> */}
{/*  CustomAccordion = ({drawer,setDrawer,sunglasses,eyeGlasses}) */}
{/* <OpenHamburger drawer={isOpen} setDrawer={setIsOpen} sunglasses={Sunglasses} eyeGlasses={Eyeglasses} pages={navigation.pages}/> */}
                {/* Sign in option for mobile menu
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-black"
                    >
                      Sign in
                    </a>
                  </div>
                </div> */}

                {/* Currency option for mobile menu */}
                {/* <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-black">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* Top navigation bar */}
        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200" style={{ backgroundColor: "white" }}>
            <div className="flex h-16 items-center px-11">
              {/* Mobile menu button */}
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() =>{setOpen(true)
setIsOpen(true)

                 } }
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img
                    src="https://india.ray-ban.com/static/version1715928826/frontend/Aceturtle/Rayban_new/en_US/images/logo.svg"
                    alt="Shopwithzosh"
                    className="h-20 w-auto"
                    style={{ marginTop:10, height: 100, width: 110 }}
                  />
                </Link>
              </div>

              {/* Main navigation links */}
              {/* <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-black hover:text-blue-800"
                      style={{color: page.name == "PROMO" ? "red" : "black"}}
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group> */}
 <Popover.Group className="hidden w-1/2  lg:ml-8 lg:block lg:self-stretch z-10 relative">
  <div className="flex   h-full space-x-8">
    {navigation.pages.map((page) => (
      <a
        key={page.name}
        href={page.href}
        className="flex  items-center text-sm font-medium text-black hover:text-blue-800"
        style={{ color: page.name === "PROMO" ? "red" : "black" }}
        onMouseEnter={() => {
          if (page.name === "SUNGLASSES") {
            setmenuItemsData(()=>Sunglasses);
          } else if (page.name === "EYEGLASSES") {
            setmenuItemsData(()=>Eyeglasses);
          } else {
            // Reset menuItemsData if it's not SUNGLASSES or EYEGLASSES
            setmenuItemsData(null); // or setmenuItemsData({})
          }
          // Update showDropdown based on whether menuItemsData is set
          setShowDropdown(page.name === "SUNGLASSES" || page.name === "EYEGLASSES");
        }}
        onMouseLeave={() =>
          setShowDropdown(
            page.name === "SUNGLASSES" || page.name === "EYEGLASSES"
          )
        }
      >
        {page.name}
      </a>
    ))}
    {/* Show dropdown if page name is "sunGlasses" or "eyeglasses" */}
   
    {showDropdown && menuItemsData && (
      <div
        onMouseLeave={() => setShowDropdown(false)}
        className="absolute top-10 right-30% w-[70vw] h-[50vh] border-1 border-red-500"
        style={{ zIndex: 1000 }}
      >
        {/* Log menuItemsData to verify its contents */}
        {/* {console.log("menuItemsData", menuItemsData)} */}
        
        <DropDown data={menuItemsData} showDropdown={showDropdown} />
      </div>
    )}
  </div>
</Popover.Group> 
{/* <Popover.Group className="hidden w-1/2 lg:ml-8 lg:block lg:self-stretch z-10 relative">
      <div className="flex justify-around h-full space-x-8 relative">
        {navigation.pages.map((page) => (
          <div
            key={page.name}
            className="relative flex items-center text-sm font-medium text-black hover:text-blue-800"
            onMouseEnter={(e) => toggleDropdown(page.name, { top: e.clientY, left: e.clientX })}
            onMouseLeave={() => setShowDropdown(false)}
          >
               <div
              className="text-black hover:text-blue-800"
              style={{ color: page.name === "PROMO" ? "red" : "black" }}
            >
              <a href={page.href}>{page.name}</a>
            </div>
            
          </div>
        ))}
        {/* Show dropdown if page name is "SUNGLASSES" or "EYEGLASSES" 
        <Collapse key={collapseKey} in={showDropdown} timeout="100" unmountOnExit>
          <div
            style={{ top: 10, left: 10, zIndex: 1000 }}
            onMouseLeave={() => setShowDropdown(false)}
            className="absolute w-[70vw] h-[50vh] border-1 border-red-500"
          >
            <DropDown data={menuItemsData} showDropdown={showDropdown} />
          </div>
        </Collapse>
      </div>
    </Popover.Group> */}
              <div className="ml-auto flex items-center">
                {/* User authentication and menu */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {newUser?.newUser?.user ? (
                    <div>
                      <Avatar
                        className="text-black"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: grey[900],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {newUser?.newUser?.user?.name[0].toUpperCase()}
                      </Avatar>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (<>
                    <Button
                      onClick={handleOpen}
                      className=" relative text-sm font-medium text-black hover:text-gray-900"
                      style={{ color: "#000000" }}
                    >
                      <img src="image-3.svg" alt="person" />
                    </Button>
                    {openAuthModal &&<div className="absolute  top-16 right-55 z-10"> <MenuOpen handleClose={handleClose} /></div>}
                    </>)}
                </div>

                {/* Search button */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-black hover:text-blue-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      onClick={() => {
                        navigate("/shops");
                      }}
                    />
                  </p>
                </div>
 {/* WishList button */}
 <div className="flex lg:ml-6">
                  <p className="p-2 text-black hover:text-blue-500">
                    <span className="sr-only">wishlist</span>
                    <img src="image-4.svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                      onClick={() => {
                        navigate("/shops");
                      }}
                    />
                  </p>
                </div>
                {/* CartButton = ({ newUser, cartItems }) */}
                <CartButton newUser={newUser} cartItems={cartItems} />
                {/* Cart button */}
                {/* <div className="ml-4 flow-root lg:ml-6">
                  <Button
                        onClick={handleOpenCart}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-black group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-black group-hover:text-gray-800">
                      {newUser?.newUser?.user?.name
                        ? cartItems?.cartItems?.cart?.totalQuantity
                        : 0}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                  {openCart && (cartItems?.cartItems?.cart?.totalQuantity!==undefined?<div className="absolute  top-16 right-20 z-10"> <EmptyCart handleCloseCart={handleCloseCart} /></div> : <div className="absolute  top-16 right-20 z-10"> <ShoppingCart handleCloseCart={handleCloseCart} /></div>)}
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Authentication modal */}
      

      {/* Uncomment if needed for additional menu items */}
      {/* <div className="header-desk-navbar">
        <div className="header-desk-container">
          <nav>
            <ul className="menus">
              {menuItemsData.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <Menuitems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </div> */}
    </div>
  );
}

const CartButton = ({ newUser, cartItems }) => {
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => setOpenCart(!openCart);
  const handleCloseCart = () => setOpenCart(false);

  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Button
        onClick={handleOpenCart}
        className="group -m-2 flex items-center p-2"
      >
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-black group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-black group-hover:text-gray-800">
          {newUser?.newUser?.user?.name
            ? cartItems?.cartItems?.cart?.totalQuantity
            : 0}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Button>
      <Slide direction="left" in={openCart} mountOnEnter unmountOnExit>      
        <div className="absolute top-16 right-20 z-10">
          {cartItems?.cartItems?.cart?.totalQuantity !== undefined ? (
            <EmptyCart handleCloseCart={handleCloseCart} />
          ) : (
            <ShoppingCart handleCloseCart={handleCloseCart} />
          )}
        </div>
      </Slide>
    </div>
  );
};
