import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { RemoveCartItemNew, updateCartQtyNEW, getCartItems } from '../../../action/cart';

const buttonStyles = 'absolute top-2 right-2 text-zinc-500 hover:text-zinc-700';
const containerStyles = 'flex justify-center items-center w-full h-[40vh] bg-zinc-100';
const innerContainerStyles = 'relative w-full h-[40vh] max-w-md p-4 bg-white border border-zinc-300 rounded shadow-md';
const textStyles = 'text-center m-14 text-zinc-600';

export const EmptyCart = ({ handleCloseCart }) => {
  return (
    <div className={containerStyles}>
      <div className={innerContainerStyles}>
        <button onClick={handleCloseCart} className={buttonStyles}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <p className={textStyles}>You have no items in your shopping cart.</p>
      </div>
    </div>
  );
};

const CartItem = ({ imageSrc, productName, price, quantity, onUpdateQuantity, onRemoveItem }) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);

  useEffect(() => {
    setInputQuantity(quantity);
  }, [quantity]);

  const debouncedUpdateQuantity = useCallback(
    debounce((newQuantity) => {
      onUpdateQuantity(newQuantity);
    }, 200),
    [onUpdateQuantity]
  );

  const handleChange = (e) => {
    const newQuantity = e.target.value;
    setInputQuantity(newQuantity);
    debouncedUpdateQuantity(newQuantity);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <img src={imageSrc} alt={productName} className="w-[130px] h-auto object-cover rounded" />
      <div className="flex flex-col flex-grow ml-4">
        <span className="text-zinc-700 dark:text-zinc-300">{productName}</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-bold">₹{price}</span>
        <div className="flex items-center mt-2">
          <label className="text-zinc-600 dark:text-zinc-400 mr-2">Qty:</label>
          <input
            type="number"
            value={inputQuantity}
            min="1"
            className="w-12 border border-zinc-300 dark:border-zinc-700 rounded px-2 py-1 text-zinc-900 dark:text-zinc-100"
            onChange={handleChange}
          />
          <button className="ml-2 text-zinc-500 dark:text-zinc-400" onClick={onRemoveItem}>🗑️</button>
        </div>
      </div>
    </div>
  );
};

const ShoppingCart = ({ handleCloseCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartItems.cartItems.cart);
  console.log(cart,"cart");
  const cartItems = cart?.lines || [];
const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch,jwt]);

  const handleUpdateQuantity = (lineId, quantity) => {
    console.log("handleUpdateQuantity", lineId, quantity);
    updateCartQtyNEW({ lineId, quantity }, toast).then(() => {
      dispatch(getCartItems());
    });
  };

  const handleRemoveItem = (lineId) => {
    dispatch(RemoveCartItemNew(lineId));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.productVariant.price * item.quantity, 0).toFixed(2);

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
        {cartItems?.map((item, index) => (
          <CartItem
            key={index}
            imageSrc={item.productVariant.images[0].url}
            productName={item.productVariant.name}
            price={item.productVariant.price}
            quantity={item.quantity}
            onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, +quantity)}
            onRemoveItem={() => handleRemoveItem(item.id)}
          />
        ))}
      </div>
      <button className="w-full text-center text-zinc-700 dark:text-zinc-300 py-2 border-t border-zinc-300 dark:border-zinc-700" onClick={handleCloseCart}>
        <Link to="/cart">View and Edit Cart</Link>
      </button>
    </div>
  );
};

export default ShoppingCart;

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
