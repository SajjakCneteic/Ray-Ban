import React from 'react';

const buttonStyles = 'absolute top-2 right-2 text-zinc-500 hover:text-zinc-700';
const containerStyles = 'flex justify-center items-center min-h-screen bg-zinc-100';
const innerContainerStyles = 'relative w-full max-w-md p-4 bg-white border border-zinc-300 rounded shadow-md';
const textStyles = 'text-center text-zinc-600';

const ShoppingCart = ({ totalQuantity }) => {
  return (
    <div className={containerStyles}>
      <div className={innerContainerStyles}>
        <button className={buttonStyles}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {totalQuantity > 0 ? (
          <p className={textStyles}>You have {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your shopping cart.</p>
        ) : (
          <p className={textStyles}>You have no items in your shopping cart.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
