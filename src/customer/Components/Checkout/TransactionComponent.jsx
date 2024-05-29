import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, placeOrder } from '../../../action/cart';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PaymentInfo from './PaymentInfo';

const inputClasses = "border p-2 rounded w-full";
const buttonClasses = "p-2 rounded bg-blue-500 text-white w-full";
const checkboxClasses = "mr-2";
const hiddenClass = "hidden";

const TransactionComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartItems.cartItems.cart);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    landmark: '',
    streetLine1: '',
    streetLine2: '',
    city: '',
    postalCode: '',
    countryCode: '',
    phoneNumber: '',
    state: ''
  });

  const shippingAdd = JSON.parse(localStorage.getItem('shippingAddress'));
  const [shippingInfo, setShippingInfo] = useState(shippingAdd);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // dispatch(fetchCart()); // Fetch cart data on component mount

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleCheckboxChange = () => {
    setShowShippingInfo(!showShippingInfo);
    if (!showShippingInfo) {
      setBillingInfo(shippingInfo);
    }
  };

  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-green-500 text-white text-center py-2 mb-4">
        Transaction times out in {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`} mins
      </div>
      <div className="flex justify-between items-center mb-4">
        {/* <span>#{cart?.id}</span> */}
        {/* <select className={inputClasses}>
          <option>English</option>
          <option>Hindi</option>
        </select> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-2">Billing Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={inputClasses}
                  placeholder="First Name"
                  value={billingInfo.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={inputClasses}
                  placeholder="Last Name"
                  value={billingInfo.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="streetLine1" className="block mb-1">Address Line 1</label>
              <input
                type="text"
                name="streetLine1"
                id="streetLine1"
                className={inputClasses}
                placeholder="Address Line 1"
                value={billingInfo.streetLine1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="streetLine2" className="block mb-1">Address Line 2</label>
              <input
                type="text"
                name="streetLine2"
                id="streetLine2"
                className={inputClasses}
                placeholder="Address Line 2"
                value={billingInfo.streetLine2}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                className={inputClasses}
                placeholder="Postal Code"
                value={billingInfo.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                id="city"
                className={inputClasses}
                placeholder="City"
                value={billingInfo.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="countryCode" className="block mb-1">Country code</label>
              <input
                type="text"
                name="countryCode"
                id="countryCode"
                className={inputClasses}
                placeholder="countryCode"
                value={billingInfo.countryCode}
                onChange={handleInputChange}
              />
            </div>
            {/* <div>
              <label htmlFor="countryCode" className="block mb-1">Country</label>
              <select
                name="countryCode"
                id="countryCode"
                className={inputClasses}
                value={billingInfo.countryCode}
                onChange={handleInputChange}
              >
                <option value="">Country</option>
                <option value="IN">India</option>
                <option value="US">USA</option>
                
              </select>
            </div> */}
            <div>
              <label htmlFor="phoneNumber" className="block mb-1">Phone</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className={inputClasses}
                placeholder="Phone"
                value={billingInfo.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="different-shipping"
              className={checkboxClasses}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="different-shipping">My Billing and Shipping address are same</label>
          </div>
          {/* {showShippingInfo && (
            <div id="shipping-info">
              <h2 className="text-xl font-bold mb-2">Shipping Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="shippingFirstName" className="block mb-1">First Name</label>
                  <input
                    type="text"
                    name="shippingFirstName"
                    id="shippingFirstName"
                    className={inputClasses}
                    placeholder="First Name"
                    value={shippingInfo?.firstName}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="shippingLastName" className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    name="shippingLastName"
                    id="shippingLastName"
                    className={inputClasses}
                    placeholder="Last Name"
                    value={shippingInfo?.lastName}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="shippingStreetLine1" className="block mb-1">Address Line 1</label>
                  <input
                    type="text"
                    name="shippingStreetLine1"
                    id="shippingStreetLine1"
                    className={inputClasses}
                    placeholder="Address Line 1"
                    value={shippingInfo?.streetLine1}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="shippingStreetLine2" className="block mb-1">Address Line 2</label>
                  <input
                    type="text"
                    name="shippingStreetLine2"
                    id="shippingStreetLine2"
                    className={inputClasses}
                    placeholder="Address Line 2"
                    value={shippingInfo?.streetLine2}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="shippingPostalCode" className="block mb-1">Postal Code</label>
                  <input
                    type="text"
                    name="shippingPostalCode"
                    id="shippingPostalCode"
                    className={inputClasses}
                    placeholder="Postal Code"
                    value={shippingInfo?.postalCode}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="shippingCity" className="block mb-1">City</label>
                  <input
                    type="text"
                    name="shippingCity"
                    id="shippingCity"
                    className={inputClasses}
                    placeholder="City"
                    value={shippingInfo?.city}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="shippingCountryCode" className="block mb-1">Country</label>
                  <select
                    name="shippingCountryCode"
                    id="shippingCountryCode"
                    className={inputClasses}
                    value={shippingInfo?.countryCode}
                    readOnly
                  >
                    <option value="IN">India</option>
                    <option value="US">USA</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="shippingPhoneNumber" className="block mb-1">Phone</label>
                  <input
                    type="text"
                    name="shippingPhoneNumber"
                    id="shippingPhoneNumber"
                    className={inputClasses}
                    placeholder="Phone"
                    value={shippingInfo?.phoneNumber}
                    readOnly
                  />
                </div>
              </div>
            </div>
          )} */}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Order Details</h2>
          <div className="border p-4 rounded">
            <div className="flex justify-between mb-2">
              <span>Order </span>
              <span>#{cart?.id || '000058049'}</span> {/* Adjust based on actual cart structure */}
            </div>
            <div className="flex justify-between mb-2">
              <span>Coupon Code</span>
              <a href="#" className="text-blue-500">Apply</a>
            </div>
            <div className="flex justify-between mb-2">
              <span>Order Amount</span>
              <span>₹ {cart?.total || '26700.00'}</span> {/* Adjust based on actual cart structure */}
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount</span>
              <span>{`₹ ${cart?.total || '26700.00'}`}</span> {/* Adjust based on actual cart structure */}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Payment Information</h2>
        {/* PaymentInfo component goes here */}
        <PaymentInfo shippingInfo={shippingInfo} />
      </div>
    </div>
  );
};

export default TransactionComponent;
