import React from 'react';
import { Slide } from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/Auth/Action';
const jwt = localStorage.getItem("jwt");
const sidebarClasses = "relative mr-2 z-10 bg-zinc-200 p-5 w-60 dark:bg-zinc-800";
const linkClasses = "text-zinc-800 hover:bg-white-900 dark:text-zinc-300 font-semibold dark:hover:text-zinc-200";
const closeButtonClasses = "absolute top-1 right-3 z-index-10 text-zinc-800 dark:text-zinc-300 cursor-pointer";

let sidebarItems = [
  { name: "LOG IN / REGISTER", link: "/sign-in" },
  { name: "MY ACCOUNT", link: "/my-account" },
  { name: "MY ORDERS", link: "/my-orders" },
  { name: "MY STORE CREDIT", link: "./my-store-credit" }
];
if(jwt!== null){
  sidebarItems = [
    { name: "MY ACCOUNT", link: "/my-account" },
    { name: "MY ORDERS", link: "/my-orders" },
    { name: "MY STORE CREDIT", link: "./my-store-credit" },
    { name: "LOG OUT", link: "/sign-out" },
  ];
}

const MenuOpen = ({ handleClose }) => {
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <div className={sidebarClasses}>
        <ul className="space-y-4">
          <button className={closeButtonClasses} onClick={handleClose}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {sidebarItems.map((item, index) => 
            {
             

             return <MenuItem key={index} text={item} />
            }
          )}
        </ul>
      </div>
    </Slide>
  );
};

const MenuItem = ({ text }) => {
  const dispatch = useDispatch();

  if(text.name=="LOG OUT"){
    const handleDropdownItemClick = (option) => {
      if(option.name=="LOG OUT"){
        dispatch(logout());
        toast.success("Logged out successfully");
  
      }
  
    };
    return (
      <li>
        <span className={linkClasses} onClick={handleDropdownItemClick(text)}>{text.name}</span>
      </li>
    );
  }
  return (
    <li>
      <a href={text.link} className={linkClasses}>{text.name}</a>
    </li>
  );
};

export default MenuOpen;
