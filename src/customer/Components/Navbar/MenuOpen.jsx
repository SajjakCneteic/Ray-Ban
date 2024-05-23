import React from 'react';

const sidebarClasses = "relative bg-zinc-200 p-5 w-60 dark:bg-zinc-800";
const linkClasses = "text-zinc-800 hover:bg-white-900 dark:text-zinc-300 font-semibold  dark:hover:text-zinc-200";
const closeButtonClasses = "absolute top-1 right-3 z-index-10 text-zinc-800 dark:text-zinc-300 cursor-pointer";

const sidebarItems = ["LOG IN / REGISTER", "MY ORDERS", "MY SELECTIONS", "GIFT CARD BALANCE"];

const MenuOpen = ({handleClose}) => {
  return (
    <div className={sidebarClasses}>
      
      <ul className="space-y-4 ">
      <button className={closeButtonClasses} onClick={handleClose}>
        {/* &times; */}
        X
      </button>
        {sidebarItems.map((item, index) => (
          <MenuItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ text }) => {
  return (
    <li>
      <a href="#" className={linkClasses}>{text}</a>
    </li>
  );
};

export default MenuOpen;
