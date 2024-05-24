import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyles = 'absolute top-2 right-2 text-zinc-500 hover:text-zinc-700';
const containerStyles = 'flex justify-center items-center w-full h-[40vh] bg-zinc-100';
const innerContainerStyles = 'relative w-full h-[40vh] max-w-md p-4 bg-white border border-zinc-300 rounded shadow-md';
const textStyles = 'text-center m-14 text-zinc-600';

export const EmptyCart = ({handleCloseCart}) => {
  return (
    <div className={containerStyles}>
      <div className={innerContainerStyles}>
        <button onClick={()=>handleCloseCart()} className={buttonStyles}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <p className={textStyles}>You have no items in your shopping cart.</p>
       
      </div>
    </div>
  );
};

const CartItem = ({ imageSrc, productName, price }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <img src={imageSrc} alt={productName} className="w-[130px] h-auto object-cover rounded" />
      <div className="flex flex-col flex-grow ml-4">
        <span className="text-zinc-700 dark:text-zinc-300">{productName}</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-bold">{price}</span>
      <div className="flex items-center mt-2">
           <label className="text-zinc-600 dark:text-zinc-400 mr-2">Qty:</label>
          <input type="number" value="1" min="1" className="w-12 border border-zinc-300 dark:border-zinc-700 rounded px-2 py-1 text-zinc-900 dark:text-zinc-100" />
           <button className="ml-2 text-zinc-500 dark:text-zinc-400">✏️</button>
           <button className="ml-2 text-zinc-500 dark:text-zinc-400">🗑️</button>
         </div>
         </div>

    </div>
  );
};

const ShoppingCart = ({  handleCloseCart }) => {
  const cartItems=[
    { imageSrc: 'https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png', productName: 'ALICE', price: '₹10,590.00',qty:1}, 
    { imageSrc: 'https://india.ray-ban.com/media/catalog/product/0/r/0rx8789_1246_3.png', productName: 'BOB', price: '₹5,990.00',qty:1}, 
    { imageSrc: 'https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png', productName: 'BOB', price: '₹5,990.00',qty:1}, 
  ]
  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')), 0).toFixed(2);

  return (
    <div className="bg-white z-100 dark:bg-zinc-800 p-4 w-96 border border-zinc-300 dark:border-zinc-700 shadow-lg rounded">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <span className="text-zinc-700 dark:text-zinc-300">{cartItems.length} Items in Cart</span>
        <button onClick={handleCloseCart} className="text-zinc-500 dark:text-zinc-400">✕</button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-zinc-700 dark:text-zinc-300">Cart Subtotal :</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-bold">₹{subtotal}</span>
      </div>
      <Link to="/checkout">
      <button onClick={handleCloseCart} className="w-full bg-red-600 text-white py-2 rounded mb-4">PROCEED TO CHECKOUT</button>
      </Link>
      <div className="overflow-y-auto max-h-40 mb-4">
        {cartItems.map((item, index) => (
          <CartItem 
            key={index}
            imageSrc={item.imageSrc}
            productName={item.productName}
            price={item.price}
          />
        ))}
      </div>
      <button className="w-full text-center text-zinc-700 dark:text-zinc-300 py-2 border-t border-zinc-300 dark:border-zinc-700"
        onClick={handleCloseCart}
      >
        <Link to="/cart">View and Edit Cart</Link>
      </button>
    </div>
  );
};

export default ShoppingCart;



// export const CartItem = ({ imageSrc, productName, price }) => {
//   return (
//     <div className="flex items-start mb-4">
//       <img src={imageSrc} alt="product image" className="w-16 h-16 object-cover mr-4" />
//       <div className="flex-1">
//         <h3 className="text-zinc-900 dark:text-zinc-100">{productName}</h3>
//         <p className="text-zinc-700 dark:text-zinc-300">{price}</p>
//         <div className="flex items-center mt-2">
//           <label className="text-zinc-600 dark:text-zinc-400 mr-2">Qty:</label>
//           <input type="number" value="1" min="1" className="w-12 border border-zinc-300 dark:border-zinc-700 rounded px-2 py-1 text-zinc-900 dark:text-zinc-100" />
//           <button className="ml-2 text-zinc-500 dark:text-zinc-400">✏️</button>
//           <button className="ml-2 text-zinc-500 dark:text-zinc-400">🗑️</button>
//         </div>
//       </div>
//     </div>
//   );
// };



//  const ShoppingCart = ({handleCloseCart}) => {
//   return (
//     <div className="bg-white z-100 dark:bg-zinc-800 p-4 w-96 border border-zinc-300 dark:border-zinc-700 shadow-lg rounded">
//       <div className="flex justify-between items-center border-b pb-2 mb-2">
//         <span className="text-zinc-700 dark:text-zinc-300">2 Items in Cart</span>
//         <button onClick={()=>handleCloseCart()} className="text-zinc-500 dark:text-zinc-400">✕</button>
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-zinc-700 dark:text-zinc-300">Cart Subtotal :</span>
//         <span className="text-zinc-900 dark:text-zinc-100 font-bold">₹16,580.00</span>
//       </div>
//       <button className="w-full bg-red-600 text-white py-2 rounded mb-4">PROCEED TO CHECKOUT</button>
//       <div className="overflow-y-auto max-h-40 mb-4">
//         <CartItem imageSrc="https://placehold.co/100x100" productName="ALICE" price="₹10,590.00" />
//         <CartItem imageSrc="https://placehold.co/100x100" productName="ALICE" price="₹5,990.00" />
//       </div>
//       <button className="w-full text-center text-zinc-700 dark:text-zinc-300 py-2 border-t border-zinc-300 dark:border-zinc-700"
//       onClick={()=>handleCloseCart()}
//       >
//         <Link to="/cart">View and Edit Cart</Link></button>
//     </div>
//   );
// };

// export default ShoppingCart;