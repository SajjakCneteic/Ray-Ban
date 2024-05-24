import { Collapse } from '@mui/material';
import { PrinterPosPause, Slide } from 'mdi-material-ui';
import React from 'react';

const sunglasses = [
  { name: "Aviator", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7235_8063_6.png" },
  { name: "Wayfarer", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_6750_6.png" },
  { name: "Erika", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_8368_6.png" },
  { name: "Round", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_5754_6.png" },
  { name: "New Wayfarer", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png" },
  { name: "I-shape", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png" },
  { name: "Justin", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png" },
  { name: "Clubmaster", img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png" }
];

const gridClass = "grid grid-cols-2 md:grid-cols-4 gap-4";
const linkClass = "hover:underline";
const textCenterClass = "text-center";

const SunglassesGrid = ({data}) => {
    // console.log(props,"dropdown")
  return (
    <div className={gridClass}>
      {data?.map((item, index) => (
        <div key={index} className={textCenterClass}>
          <img src={item.img} alt={item.name} className="mx-auto mb-2" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

// const Sidebar = () => {
//   return (
//     <div className="w-full md:w-1/4 p-4">
//         <h2 className="font-bold mb-2">SHOP</h2>
//       <hr/>
//       <ul className="space-y-2">
//         <li><a href="#" className={linkClass}>Men</a></li>
//         <li><a href="#" className={linkClass}>Women</a></li>
//         <li><a href="#" className={linkClass}>Kids</a></li>
//         <li><a href="#" className={linkClass}>All Sunglasses</a></li>
//       </ul>
//       <h2 className="font-bold mt-8 mb-2">Gift Card</h2>
//       <hr/>
//       <ul className="space-y-2">
//         <li><a href="#" className={linkClass}>New Arrivals</a></li>
//         <li><a href="#" className={linkClass}>Best Sellers</a></li>
//         <li><a href="#" className={linkClass}>Reverse</a></li>
//         <li><a href="#" className={linkClass}>Scuderia Ferrari</a></li>
//         <li><a href="#" className={linkClass}>Chromance</a></li>
//         <li><a href="#" className={linkClass}>Polarized <span className="text-red-500">❤️</span></a></li>
//         <li><a href="#" className={linkClass}>Titanium</a></li>
//       </ul>
//     </div>
//   );
// };

const MainContent = ({data}) => {
  return (
    <div className="w-full md:w-3/4 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold">MOST POPULAR</h2>
    
        <a href="#" className="text-black hover:underline">View all</a>
      </div>
      <hr/>
      <SunglassesGrid data={data} />
    </div>
  );
};

const Sidebar = ({sidebarLinks}) => {
    const linkClass = "text-gray-700 hover:text-blue-700";
  
    return (
      <div className="w-full md:w-1/4 p-4">
        <h2 className="font-bold mb-2">SHOP</h2>
        <hr />
        <ul className="space-y-2">
          {sidebarLinks.shop.map((link, index) => (
            <li key={index}>
              <a href="#" className={linkClass}>{link}</a>
            </li>
          ))}
        </ul>
        <h2 className="font-bold mt-8 mb-2">Gift Card</h2>
        <hr />
        <ul className="space-y-2">
          {sidebarLinks.giftCard.map((link, index) => (
            <li key={index}>
              <a href="#" className={linkClass}>{link}</a>
            </li>
          ))}
        </ul>
        {sidebarLinks.frameStyle && (<>
            <h2 className="font-bold mt-8 mb-2">Frame Style</h2>
        <hr />
       
            <ul className="space-y-2">
                 {sidebarLinks.frameStyle.map((link, index) => (
            <li key={index}>
              <a href="#" className={linkClass}>{link}</a>
            </li>
          ))}
            </ul>
            </>
        )}
      </div>
    );
  };
  

const DropDown = ({data,showDropdown}) => {
    const {sidebarData, mainContentData} = data;
  return (
    <div className="flex flex-col mt-10 p-10 border-1 bg-white md:flex-row">
      <Sidebar sidebarLinks={sidebarData}/>
      <MainContent data={mainContentData} />
    </div>
  );
};

export default DropDown;
