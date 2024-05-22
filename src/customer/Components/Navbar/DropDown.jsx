import { PrinterPosPause } from 'mdi-material-ui';
import React from 'react';

const sunglasses = [
  { name: "Aviator", img: "https://placehold.co/100x50" },
  { name: "Wayfarer", img: "https://placehold.co/100x50" },
  { name: "Erika", img: "https://placehold.co/100x50" },
  { name: "Round", img: "https://placehold.co/100x50" },
  { name: "New Wayfarer", img: "https://placehold.co/100x50" },
  { name: "I-shape", img: "https://placehold.co/100x50" },
  { name: "Justin", img: "https://placehold.co/100x50" },
  { name: "Clubmaster", img: "https://placehold.co/100x50" }
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

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <h2 className="font-bold mb-4">SHOP</h2>
      <ul className="space-y-2">
        <li><a href="#" className={linkClass}>Men</a></li>
        <li><a href="#" className={linkClass}>Women</a></li>
        <li><a href="#" className={linkClass}>Kids</a></li>
        <li><a href="#" className={linkClass}>All Sunglasses</a></li>
      </ul>
      <h2 className="font-bold mt-8 mb-4">Gift Card</h2>
      <ul className="space-y-2">
        <li><a href="#" className={linkClass}>New Arrivals</a></li>
        <li><a href="#" className={linkClass}>Best Sellers</a></li>
        <li><a href="#" className={linkClass}>Reverse</a></li>
        <li><a href="#" className={linkClass}>Scuderia Ferrari</a></li>
        <li><a href="#" className={linkClass}>Chromance</a></li>
        <li><a href="#" className={linkClass}>Polarized <span className="text-red-500">❤️</span></a></li>
        <li><a href="#" className={linkClass}>Titanium</a></li>
      </ul>
    </div>
  );
};

const MainContent = ({data}) => {
  return (
    <div className="w-full md:w-3/4 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">MOST POPULAR</h2>
        <a href="#" className="text-blue-500 hover:underline">View all</a>
      </div>
      <SunglassesGrid data={data} />
    </div>
  );
};

const DropDown = ({data}) => {
  return (
    <div className="flex flex-col mt-10 bg-white md:flex-row">
      <Sidebar/>
      <MainContent data={data} />
    </div>
  );
};

export default DropDown;
