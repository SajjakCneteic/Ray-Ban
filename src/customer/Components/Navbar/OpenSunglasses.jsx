import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Sunglasses = {
  sidebarData: {
    shop: ['Men', 'Women', 'Kids', 'All Sunglasses'],
    giftCard: [
      'New Arrivals',
      'Best Sellers',
      'Reverse',
      'Scuderia Ferrari',
      'Chromance',
      'Polarized ❤️',
      'Titanium',
    ],
  },
  mainContentData: [
    {
      name: 'Aviator',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7235_8063_6.png',
    },
    {
      name: 'Wayfarer',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_6750_6.png',
    },
    {
      name: 'Erika',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_8368_6.png',
    },
    {
      name: 'Round',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_5754_6.png',
    },
    {
      name: 'New Wayfarer',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png',
    },
    {
      name: 'I-shape',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png',
    },
    {
      name: 'Justin',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png',
    },
    {
      name: 'Clubmaster',
      img: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png',
    },
  ],
};

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-200 w-full">
    <button
      type="button"
      className="w-full flex items-center justify-between p-4 text-left text-gray-900 font-medium hover:bg-gray-100 focus:outline-none"
      onClick={onClick}
    >
      <span>{title}</span>
      <span className="ml-2">{isOpen ? '-' : '+'}</span>
    </button>
    <Transition
      show={isOpen}
      enter="transition duration-200 ease-out"
      enterFrom="transform -translate-y-4 opacity-0"
      enterTo="transform translate-y-0 opacity-100"
      leave="transition duration-150 ease-in"
      leaveFrom="transform translate-y-0 opacity-100"
      leaveTo="transform -translate-y-4 opacity-0"
    >
      <div className="p-4">{children}</div>
    </Transition>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {Object.entries(Sunglasses.sidebarData).map(([key, items], index) => (
        <AccordionItem
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        >
          <ul>
            {items.map((item, i) => (
              <li key={i} className="py-2 px-4 text-gray-700 hover:bg-gray-100">
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </div>
  );
};

const MainContent = () => (
  <div className="flex overflow-x-scroll p-4 space-x-4">
    {Sunglasses.mainContentData.map((sunglass) => (
      <div
        key={sunglass.name}
        className="min-w-max bg-white shadow-lg rounded-lg
         overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <img src={sunglass.img} alt={sunglass.name} className="w-full" />
        <div className="p-4  text-center font-sm text-gray-900">
          {sunglass.name}
        </div>
      </div>
    ))}
  </div>
);

const OpenSunglasses = () => (
  <div className="min-h-screen bg-gray-100">
    <div className="">
      <aside className="w-full ">
        <Accordion />
      </aside>
      <main className="w-full">
        <MainContent />
      </main>
    </div>
  </div>
);

export default OpenSunglasses;
