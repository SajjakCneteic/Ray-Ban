import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCartItems, RemoveCartItemNew, updateCartQtyNEW } from '../../../action/cart';
// import CartItem from './CartItem';
const cartItem=[
  { imageSrc: 'https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png', productName: 'ALICE', price: '₹10,590.00',qty:1}, 
  { imageSrc: 'https://india.ray-ban.com/media/catalog/product/0/r/0rx8789_1246_3.png', productName: 'BOB', price: '₹5,990.00',qty:1}, 
  { imageSrc: 'https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png', productName: 'BOB', price: '₹5,990.00',qty:1}, 
]
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cartItems } = useSelector((store) => store.cart);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [CartData, setCartData] = useState([]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    setCartData(cartItem);
  }, [cartItem]);

  const handleRemoveItemFromCart = (e, id) => {
    e.preventDefault();
    RemoveCartItemNew(id).then(() => {
      dispatch(getCartItems());
    });
  };

  const handleUpdateCartPlus = (e, lineId, qty) => {
    e.preventDefault();
    updateCartQtyNEW(lineId, qty + 1).then(() => {
      dispatch(getCartItems());
    });
  };

  const handleUpdateCartMinus = (e, lineId, qty) => {
    e.preventDefault();
    if (qty !== 1) {
      updateCartQtyNEW(lineId, qty - 1).then(() => {
        dispatch(getCartItems());
      });
    } else {
      handleRemoveItemFromCart(e, lineId);
    }
  };

  const toggleCouponForm = () => {
    setShowCouponForm(!showCouponForm);
  };

  const subtotal = CartData.reduce((acc, item) => acc + parseFloat(item.price.replace('₹', '').replace(',', '')), 0);

  const buttonClasses = 'px-2 py-1 border';
  const textClasses = 'text-zinc-600 dark:text-zinc-400';
  const priceClasses = 'text-green-600 dark:text-green-400';

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">SHOPPING CART</h1> */}
      {CartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-zinc-800 border">
              <thead className="bg-zinc-100 dark:bg-zinc-700">
                <tr>
                  <th className="text-left px-6 py-3 border-b">Product details</th>
                  <th className="text-left px-6 py-3 border-b">Quantity</th>
                  <th className="text-left px-6 py-3 border-b">Delivery Date</th>
                  <th className="text-left px-6 py-3 border-b">Price</th>
                </tr>
              </thead>
              <tbody>
                {CartData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border-b relative">
                      <div className="flex items-center gap-4">
                        <img src={item.imageSrc} alt="Product Image" className="w-[130px] h-auto mr-4" />
                        <div>
                          <p className="font-semibold">{item.productName}</p>
                          <p className={textClasses}>ORX72371575453</p>
                          <p className={textClasses}>Size: 53</p>
                          <p className={textClasses}>Frame: Square</p>
                        </div>
                        <a href="#" onClick={(e) => handleRemoveItemFromCart(e, index)} className=" absolute top-0 right-10 font-semibold  text-red-500 text-sm mt-2 inline-block">× Remove</a>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div className="flex items-center">
                        <button onClick={(e) => handleUpdateCartMinus(e, index, parseInt(item.qty))} className={buttonClasses}>-</button>
                        <span className="px-4">{item.qty}</span>
                        <button onClick={(e) => handleUpdateCartPlus(e, index, parseInt(item.qty))} className={buttonClasses}>+</button>
                      </div>
                     
                    </td>
                    <td className="px-6 py-4 border-b">
                      <p className={priceClasses}>
                        <span style={{color:"black"}}>Estimated Delivery Date</span>
                      <br/>  Mon May 27</p>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <p>{item.price}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold mb-2" onClick={toggleCouponForm}>Apply Discount Code +</p>
            {showCouponForm ? (
              <div className="flex items-center">
                <input type="text" placeholder="Enter discount code" className="border px-4 py-2 mr-2" />
                <button className="bg-black text-white px-4 py-2">ACTIVATE CODE</button>
              </div>
            ) : (
              <button  className="text-blue-500 underline"></button>
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping (Free Shipping)</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>ORDER TOTAL</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout">
              
             
              <button className="bg-red-500 text-white w-full py-2 mt-4">CHECKOUT NOW</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const EmptyCart = () => {
  const containerStyles = "flex flex-col items-start p-8 dark:text-white";
  const titleStyles = "text-2xl font-bold mb-4";
  const paragraphStyles = "mb-2";
  const linkStyles = "text-blue-500 underline";

  return (
    <div className={containerStyles}>
      <h1 className={titleStyles}>SHOPPING CART</h1>
      <p className={paragraphStyles}>You have no items in your shopping cart.</p>
      <a href="#" className={linkStyles}>Click here to continue shopping.</a>
    </div>
  );
};

export default Cart;
